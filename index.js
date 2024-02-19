import TestBox from './components/TestBox.vue';
import TestBoxx from './components/TestBoxx.vue';
import MessageBox from './components/message-box/message-box.js';


const components = [
  TestBox,
  TestBoxx
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
  MessageBox
 }