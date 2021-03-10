import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.sql.ResultSet;
import java.io.*;

public class Dados {
	private Date data;
    private String estado;
    private String cidade;
    private int casos;
    private int mortes;
    private int populacao;
    
    public Dados(){
        this.setEstado("");
        this.setCidade("");
        this.setCasos(0);
        this.setMortes(0);
        this.setPopulacao(0);
    }

    public Dados(Date data, String estado, String cidade, int casos, int mortes, int populacao){
        this.setData(data);
        this.setEstado(estado);
        this.setCidade(cidade);
        this.setCasos(casos);
        this.setMortes(mortes);
        this.setPopulacao(populacao);
    }

    public void setData(Date data){
        this.data = data;
    }

    public Date getData(){
        return this.data;
    }

    public void setEstado(String estado){
        this.estado = estado;
    }

    public String getEstado(){
        return this.estado;
    }

    public void setCidade(String cidade){
        this.cidade = cidade;
    }

    public String getCidade(){
        return this.cidade;
    }

    public void setCasos(int casos){
        this.casos = casos;
    }

    public int getCasos(){
        return this.casos;
    }

    public void setMortes(int mortes){
        this.mortes = mortes;
    }

    public int getMortes(){
        return this.mortes;
    }

    public void setPopulacao(int populacao){
        this.populacao = populacao;
    }

    public int getPopulacao(){
        return this.populacao;
    }

    public static void LerArquivo(Dados[] dados) throws ParseException{
        try{
            //FileReader arquivo = new FileReader("C:\\Users\\cauja\\eclipse-workspace\\jdbc-postgresql-connection\\src\\net\\javaguides\\postgresql/casos.csv");
            //BufferedReader br = new BufferedReader(arquivo);
            BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("C:\\Users\\cauja\\eclipse-workspace\\jdbc-postgresql-connection\\src\\\\net\\javaguides\\postgresql/casos.csv"),"UTF-8"));
            String linha = br.readLine();
            int i = 0;

            while(linha != null){
                try {
					dados[i] = tratarDados(linha);
				} catch (ParseException e) {
					e.printStackTrace();
				}
                linha = br.readLine();
                i++;
            }
            br.close();
        }

        catch(IOException e){
            System.err.printf("Erro na abertura do arquivo %s\n",e.getMessage());
        }
    }

    public static Dados tratarDados(String linha) throws ParseException{
        Dados dados = new Dados();
        String array[] = new String[11];
        array = linha.split(",");

        if(!(array[0].equals("date"))){
        	SimpleDateFormat formato = new SimpleDateFormat("yyyy-mm-dd"); 
        	Date data = formato.parse(array[0]);
        	dados.setData(data);
            dados.setEstado(array[1]);
            dados.setCidade(array[2]);
            dados.setCasos(Integer.parseInt(array[4]));
            dados.setMortes(Integer.parseInt(array[5]));
            dados.setPopulacao(Integer.parseInt(array[7]));
        }
        return dados;
    }
    
    public static String ISO88591toUTF8(String strISO) throws Exception {
        byte[] isoBytes = strISO.getBytes("ISO-8859-1");
		return new String(isoBytes, "UTF-8");
    }

    public void imprimir() throws Exception {
    	System.out.println(data + " " + estado + " " + cidade + " " + casos + " " + mortes + " " + populacao);
    	//System.out.println(ISO88591toUTF8(data) + " " + ISO88591toUTF8(estado) + " " + ISO88591toUTF8(cidade) + " " + casos + " " + mortes + " " + populacao);
    }
	
	public static void main(String[] args) throws Exception {

        // OBS: Código só funciona se tiver a extensão JDBC para conectar com o PostgreSQL
        
        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/covid19","postgres","postgres")) {
        	Dados[] dados = new Dados[5567];
        	LerArquivo(dados);
			Statement statement = connection.createStatement();
			
			for(int i = 1; i < dados.length; i++){
				if(dados[i].cidade.indexOf("'")>=0) {
					dados[i].cidade = dados[i].cidade.replace("'"," ");
				}
	        }
			
			for(int i = 1; i < dados.length; i++){
				if(dados[i].cidade.indexOf("'")>=0) {
					dados[i].cidade = dados[i].cidade.replace("'"," ");
				}
	        }
			statement.executeUpdate("CREATE TABLE IF NOT EXISTS cidades (id serial PRIMARY KEY, datacoleta date, estado VARCHAR(20), nome VARCHAR(200), casos int, mortes int, populacao int);");
			String sql = "INSERT INTO cidades(datacoleta, estado, nome, casos, mortes, populacao) VALUES ";

			for(int i = 1; i < dados.length; i++) {
				sql += "('"+dados[i].data+"', '"+dados[i].estado+"', '"+dados[i].cidade+"', "+dados[i].casos+", "+dados[i].mortes+", "+dados[i].populacao+"),";
			    sql += "\n";
			}
			
			sql = sql.substring(0, sql.length() - 2) + ';';   
			statement.executeUpdate(sql);
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
    }
}