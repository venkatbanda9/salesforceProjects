public class FetchAccountList {
	
    @AuraEnabled
    public static List<Account> getAccountRecord(){
        return new List<Account>([SELECT id,Name,Type,Phone from Account where Type!=null limit 100]);
    }
}