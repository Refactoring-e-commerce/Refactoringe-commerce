import passport from "passport";
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.CALL_BACK_URL!,
      scope: ["email", "profile"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      signupGoogle(accessToken, refreshToken, profile, done);
    }
  )
);

export const signupGoogle = async (
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: any
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: profile.emails[0].value },
    });
    
    if (!user) {
      const userData:any = {
        email: profile.emails[0].value,
        fullName: profile.displayName,
        // image: profile.photos[0].value,
        image:accessToken,
        birthDate: Date.now().toLocaleString(),
        password: await bcrypt.hash(profile.emails[0].value, 10),
      };
      console.log(userData);

      const newUser = await prisma.user.create({
        data: userData,
      });
      return done(null, newUser);
    }

    done(null, profile);
   
  } catch (error) {
    console.error(error);
    done(error);
  } finally {
    await prisma.$disconnect();
  }
};
passport.serializeUser(function(user:any, done:any):void {
  console.log(user);
  
  done(null, user!);
});


passport.deserializeUser((user: any, done) => {
  
  done(null, user!);
});



