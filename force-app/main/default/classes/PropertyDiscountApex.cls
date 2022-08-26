public class PropertyDiscountApex {

    public static void applyDiscount(list<Property__c> varPropList){
        for(Property__c varVal: varPropList){
            if(varVal.Type__c == 'Row House'){
                varVal.Price__c = varVal.Price__c - (0.05*varVal.Price__c);
            }
        }
    }
}