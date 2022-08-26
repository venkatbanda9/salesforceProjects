public class EVCTest {
	public EVCTest(ApexPages.StandardController stdController){
        //any code
    }
    
    public string dispMsg{set; get;}
    public void handleClickGreet(){
        dispMsg = 'Welcome USER from Test2';
    }
}