public class ExtensionVFPController {
    
    public ExtensionVFPController(ApexPages.StandardController stdController){
        //any code
    }
	
    public string dispMsg{set; get;}
    
    public void handleClickGreet(){
        dispMsg = 'Welcome USER from Test1';
    }
    
    public string compValue{set; get;}
    public void handleSave(){
        Account acc1 = new Account();
        acc1.Name = compValue;
        insert acc1;
    }
}