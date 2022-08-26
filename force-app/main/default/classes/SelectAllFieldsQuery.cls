public with sharing class SelectAllFieldsQuery{
    public SelectAllFieldsQuery(){
    

    string varTableName = 'Parker_Pen__c';
    
    //C===========================Create a string variable where u will have to store entire query
    //string varQuery = 'SELECT ';
    //c======================Declare a list which can hold such multiple names of table
    list<string> varListofTables = New list<string>();
    //cc==========================Add above table entry into VarListofTables collection
    varListofTables.add(varTableName);
    //cc========================== There is a very imp class "Schema" in SF which tells info about objects, fields etc
    
    
    /*set<string> fieldsSet = schema.describeSObjects(varListofTables)[0].fields.getMap().keySet();
    for (string fieldz : fieldsSet) {
        varQuery = varQuery + fieldz + ',';
    }
    varQuery = varQuery.removeEnd(',');
    varQuery = varQuery + ' FROM ' + varTableName;
    system.debug(varQuery);*/
}
}