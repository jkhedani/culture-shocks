/**
 * Sample MobX Class
 */
import { action, observable, decorate } from 'mobx';

class CultureShock_Store {

  /////////////// Observable ///////////////
  
  CultureShocks = [
    {
      "title": "Travelling to a new culture",
      "desc": "A description for culture shock",
      "username": "Justin",
      "avatar_path": "",
      "time": "1 hour ago",
      "membership":"",
    },
    {
      "title": "NextTitle",
      "desc": "A description for culture shock",
      "username": "Justin",
      "avatar_path": "",
    }
  ]


  ///////////////// Drivers /////////////////

  Create() {}
  Read() {}
  Update() {}
  
}

decorate(CultureShock_Store, {
  CultureShocks: observable,
  Create: action,
  Read: action,
  Update: action,
})

export default CultureShock_Store;
