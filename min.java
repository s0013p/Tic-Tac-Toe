

public class minval {

	public void minimum()
	{
		int[] num = {10, 5, 9, 20, 3};
		int minno=num[0];
		int a = 0;
		 
		for(int i=0;i<num.length;i++)
			
		{
			a=Math.min(num[i],minno);
		}
		
		System.out.println("Minimum no. is : "+a);		
	}

	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		minval M=new minval();
		M.minimum();

	}

}
