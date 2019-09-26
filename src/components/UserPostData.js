   export default function UserPostData(values) {

    return new Promise((resolve, reject) => { 

      const http = new XMLHttpRequest();
      const url = 'api/contact.php';

      const params =
          "name=" +
          values.name +
          "&email=" +
          values.email +
          "&message=" +
          values.message;
  

      http.open("POST", url, true);

      //Send the proper header information along with the request
      http.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );

      http.onreadystatechange = function() {

        //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {

          setTimeout(function() {
              
            // reset form
            //console.log("Data Enviada");
            resolve();
            
          }, 2000);

          //console.log(http.responseText);
        }

      };

      http.send(params);

  });
     
}
