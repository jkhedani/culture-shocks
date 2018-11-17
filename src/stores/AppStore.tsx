/**
 * Sample MobX Class
 */
import { action, observable, decorate } from 'mobx';

class App_Store {

  /////////////// Observable ///////////////
  
  BuyerColumns = []

  ///////////////// Models /////////////////

  ModelAppConfig = {
    totalPoints: 0,
  }
  ModelBuyerColumn = {
    name: "",
    columnType: ""
  }

  ///////////////// Drivers /////////////////

  Create() {}
  Read() {}
  Update() {}

  ///////////////// Use Cases /////////////////

  CreateComparisonColumn(buyerColumnObject) {
    this.BuyerColumns.push(buyerColumnObject)
  }
  
}

decorate(App_Store, {
  ModelAppConfig: observable,
  ModelBuyerColumn: observable,
  BuyerColumns: observable,
  Create: action,
  Read: action,
  Update: action,
  CreateComparisonColumn: action,
})

export default App_Store;
