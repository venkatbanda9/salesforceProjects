public class CustomVFPControllerClass {
	
    public CustomVFPControllerClass(ApexPages.StandardController stdController){
        
    }
    public string UserName{set;get;}
    public string dispMsg{set;get;}
       
   
    public void handleClick(){
        dispMsg = 'Welcome '+ UserName;
    }
}