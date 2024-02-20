import TestBox from './components/TestBox.vue';
import TestBoxx from './components/TestBoxx.vue';
import MessageBox from './components/message-box/message-box.js';
import Button from './components/button/Button.vue';
import Table from './components/table/Table.vue';


const components = [
  TestBox,
  TestBoxx,
  Button,
  Table
]

export default {
  install(app){
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}


export {   
  TestBox,
  TestBoxx,
  MessageBox,
  Button,
  Table
 }

export const Table = Table;