trigger PropertyDiscountTrigger on Property__c (before insert) {

    PropertyDiscountApex.applyDiscount(Trigger.New);
}