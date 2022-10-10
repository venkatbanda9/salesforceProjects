public class ParkerPenApex {
	
    @AuraEnabled
    public static void crtRecord(Parker_Pen__c Rec){
        	system.debug('inside apex');
        try{
            if(Rec!=null){
                insert Rec;
            }
        }
        catch(Exception e){
            
        }
        
    }
}