public with sharing class AccountHelperClass {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> varAccList =  new List<Account> ();
        varAccList = [SELECT id, name, Industry FROM Account ORDER BY Name DESC LIMIT 5];

        return varAccList;
    } 

}