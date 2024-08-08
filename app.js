// fire bass //

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZAI02pI8CUWyP8YEjEjNv1nXlb8VZ6bc",
    authDomain: "test-43a6f.firebaseapp.com",
    projectId: "test-43a6f",
    storageBucket: "test-43a6f.appspot.com",
    messagingSenderId: "922853907642",
    appId: "1:922853907642:web:8386eae4dfbe28fc76b683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//  .......  //
let box = document.getElementById('box')
let s_name = document.getElementById('name');
let s_email = document.getElementById('email');
let s_number = document.getElementById('number');
let s_age = document.getElementById('age');
let btn = document.getElementById('btn');
let del = document.getElementById('del');


// import { doc, setDoce  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// import { doc, setDoc } from "firebase/firestore";


// add data
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {  getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


btn.addEventListener('click', async () => {

    // await setDoce(doc(db, "student data"), {
    //     name: s_name.value,
    //     email: s_email.value,
    //     number: s_number.value,
    //     age : s_age.value,
    //   });
    //   console.log(ok);


    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "student data"), {
        name: s_name.value,
        email: s_email.value,
        number: s_number.value,
        age: s_age.value,
    });
    console.log("Document written with ID: ", docRef.id);
    console.log(s_name.value);


    setTimeout(async ()=>{
        const querySnapshot = await getDocs(collection(db, "student data"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data().email);
            box.innerHTML = ''
        box.innerHTML += `<div class="add-data flex justify-center  items-center ">
                <p class="w-[30%] p-2  bg-blue-200 mt-3">${doc.data().name}</p>
                <p class="w-[30%] p-2  bg-blue-200 mt-3">${doc.data().email}</p>
                <p class="w-[30%] p-2  bg-blue-200 mt-3">${doc.data().number}</p>
                <p class="w-[30%] p-2  bg-blue-200 mt-3">${doc.data().age}</p>
                
              </div>`
        });
    }, 3000);
}
)


// get data


setTimeout(async ()=>{
    const querySnapshot = await getDocs(collection(db, "student data"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data().email);
    box.innerHTML += `<div class="add-data flex justify-center overflow-y-auto items-center ">
            <p class="w-[30%] h-[7vh] bg-blue-200 mt-3">${doc.data().name}</p>
            <p class="w-[30%] h-[7vh] bg-blue-200 mt-3">${doc.data().email}</p>
            <p class="w-[30%] h-[7vh] bg-blue-200 mt-3">${doc.data().number}</p>
            <p class="w-[30%] h-[7vh] bg-blue-200 mt-3">${doc.data().age}</p>
             <button class=" bg-blue-200  w-[7%]  h-[7vh]  text-gray-100 mt-3"  id="del" > <img class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKVJREFUSEvtlbERgzAMRZ8LNqFKVmAMhmAI+oyQyw6ZIQPQwx2zUJBzkcA5CAkfTgMubfk/6duWHYmHS6yPBVABdyERv/ZYS1IDFMALyASRAfAxjQQJAeNOln11/w7YqYBJRjqDWKt+9I4B+FQZ2rY0H2XRCVi8+nO/T4sOYNGWBmh+aC1w2aIMdMA13CM1uxK4AbkR0gM18LQCjLp6mPYn6wpKxBs0qysZAkh0fgAAAABJRU5ErkJggg=="/></button>
          </div>`
    });
}, 3000);


// delet button 

// function del(e) {
//     e.parentElement.remove();
// }

del.addEventListener('click', function () {
    this.parentElement.remove()
})
