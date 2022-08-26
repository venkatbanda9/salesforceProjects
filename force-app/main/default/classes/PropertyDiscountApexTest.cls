@isTest
public class PropertyDiscountApexTest {

    @isTest
    public static void testFunction(){
        
        //create record
        Property__c varTest = new Property__c();
        
        //insert values to var
        varTest.Price__c = 100000;
        varTest.Type__c = 'Row House';
        
        //insert record
        insert varTest;
        
        //check values
        Property__c varRes = new Property__c();
        varRes = [select Price__c from Property__c where Id=:varTest.ID];
        
        system.assertEquals((varTest.Price__c-(varTest.Price__c*0.05)), varRes.Price__c);
    }
}