/* eslint-disable no-console */
import './css/index.css'
import './css/bootstrap-grid.min.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.min.css'
import './css/properties-homepage.css'




// import {getUsers, deleteUser} from './api/usersApi.js';




// getUsers().then(result => {
//   let usersBody = "";

//   result.forEach(user => {
//     usersBody += `<tr>
//       <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
//       <td>${user.id}</td>
//       <td>${user.firstName}</td>
//       <td>${user.lastName}</td>
//       <td>${user.email}</td>
//     </tr>`
//   });
//  // global.document.getElementById('users').innerHTML = usersBody;


//   const deleteLinks = global.document.getElementsByClassName('deleteUser');

//   //must use array.from to create a real array from DOM collection
//   //getElementsByClassName only return an "Array Like" object

//   Array.from(deleteLinks, function(link){
//     link.onclick = function(event){
//       const element =  event.target;
//       event.preventDefault();
//       deleteUser(element.attributes["data-id"].value);
//       const row = element.parentNode.parentNode;
//       row.parentNode.removeChild(row);
//     };
//   });

// });
