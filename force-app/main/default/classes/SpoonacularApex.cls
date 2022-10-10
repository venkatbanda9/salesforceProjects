public class SpoonacularApex {
    
    private static final string SPOONACULAR_API = 'https://api.spoonacular.com';
    private static final string API_KEY = '50bc38028c0340c98d37317e3abc206b';
    
	
    public static String getRandomRecipe(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR_API +'/recipes/random?apiKey=' + API_KEY);

        request.setMethod('GET');
        HttpResponse response = http.send(request);
        system.debug('response is '+ response.getStatusCode());
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
                return response.getBody();
            }
        return '';
    }
    
    public static String getRecipie(string recipieId){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        
        //https://api.spoonacular.com/recipes/{id}/information
        request.setEndpoint(SPOONACULAR_API +'/recipes/'+ recipieId +'/information?apiKey=' + API_KEY);

        request.setMethod('GET');
        HttpResponse response = http.send(request);
        system.debug('response is '+ response.getStatusCode());
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
                return response.getBody();
            }
        return '';
    }
    
    public static String getRecipeByIngredients(string ingredients){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        
        //https://api.spoonacular.com/recipes/findByIngredients
        request.setEndpoint(SPOONACULAR_API +'/recipes/findByIngredients?apiKey=' + API_KEY + '&ingredients='+ingredients);

        request.setMethod('GET');
        HttpResponse response = http.send(request);
        system.debug('response is '+ response.getStatusCode());
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
                return response.getBody();
            }
        return '';
    }
}