function Singleton () {
    var instance;
 
    function createInstance() {
        var user=document.getElementById("user").value;
        var pas=document.getElementById("pass").value;
        var login = new Object(user,pas);
        return login;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
                console.log("Creado");
            }else{
                console.log("Ya existe una instancia");
            }
            return instance;
        }
    };
}
