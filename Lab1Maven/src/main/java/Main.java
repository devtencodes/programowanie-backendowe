import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Main {

    public static void main(String[] args) throws JsonProcessingException {

        ObjectMapper objectMapper = new ObjectMapper();

        // Converting object to json

        User userObject = new User("Bobby", 24);
        String userJson = objectMapper.writeValueAsString(userObject);

        System.out.println(userJson); // {"name":"Bobby","age":24}
        // ----------------------


        // Converting json to object
        String userJson2 = "{\"name\":\"Franklin\",\"age\":23}";
        UserNoArguments userObject2 = objectMapper.readValue(userJson2, UserNoArguments.class);

        System.out.println(userObject2.getName()); // Franklin
        System.out.println(userObject2.getAge());  // 23
    }


}