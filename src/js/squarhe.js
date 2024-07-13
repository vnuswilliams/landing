/**
 * Si la card-toast est afficher alors la faire disparaitre après 5sec
 */
window.onload = function () {
  const toast = document.querySelector(".card-toast");
  if (toast) {
    setTimeout(() => {
      toast.classList.add("d-none");
    }, 5000);
  }
};

/**
 * Permet de sélectionner tous les champs radio, select, checkbox d'une page et la sauvegarder en JSON dans un cookie
 *
 */
function getValues() {
  const radios = document.querySelectorAll('input[type="radio"]'),
    values = [],
    valuesCheckboxes = [],
    valuesSelect = [];
  radios.forEach((radio) => {
    values.push(radio.value);
  });
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    valuesCheckboxes.push(checkbox.value);
  });
  const inputSelects = document.querySelectorAll("select option");
  inputSelects.forEach((inputSelect) => {
    valuesSelect.push(inputSelect.value);
  });

  const cookieData = JSON.stringify(values),
    cookiecheckboxesData = JSON.stringify(valuesCheckboxes),
    selectData = JSON.stringify(valuesSelect);

  document.cookie = `radio=${cookieData}; SameSite=Lax ;path=${window.location.pathname}; max-age=84600`;
  document.cookie = `checkboxes=${cookiecheckboxesData} ;SameSite=Lax; path=${window.location.pathname}; max-age=84600`;
  document.cookie = `select=${selectData}; SameSite=Lax ;path=${window.location.pathname}; max-age=84600`;
}

//appel de la fonction
getValues();



/* 

const forms = document.querySelectorAll('form')

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const datas = new FormData(form)
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.response);
            }else if (this.readyState == 4){
                console.log(this);
                alert('une erreur est survenue')
            }
        }
        xhr.open('POST', "treatment/test.php", true)
        xhr.responseType = "json"
        //xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded")
        //console.log(JSON.stringify(datas));
        xhr.send(datas)

        return false
    })

}) */