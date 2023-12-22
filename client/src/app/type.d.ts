interface Brand {
  id: String;
  fullName: String;
  email: String;
  password: String;
  image: String;
  cover: String;
  bio: String;
}

interface User {
  id: String;
  fullName: String;
  email: String;
  password: String;
  birthDate: String;
}

interface Product {
  id: String;
  name :       String;
  image :    String[];
  description : String;
  price     :   Int;
  category   :  String;
  quantity   :  Int;
  reference  :  String;
  status     :  Boolean;
}

