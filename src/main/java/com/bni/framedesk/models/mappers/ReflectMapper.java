package com.bni.framedesk.models.mappers;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//AVISO: TESTE DE UMA IDEIA, NÃO UTILIZE ISSO AQUI POR AGORA
public class ReflectMapper<FROM, TO> {
    public TO convert(FROM from, TO to) {
        Map<String, Field> fieldsRequest = toMap(from.getClass().getFields());
        List<String> fieldsModel = toList(to.getClass().getFields());
        
        fieldsRequest.entrySet().stream().forEach(requestField -> {

                if(fieldsModel.contains(requestField.getKey())){
                    try {

                        to.getClass().getField(requestField.getKey()).set(to, requestField.getValue());

                    } catch (IllegalArgumentException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    } catch (IllegalAccessException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    } catch (NoSuchFieldException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    } catch (SecurityException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                }
        });
        
        return to;
    }

    public Map<String, Field> toMap(Field[] fields){
        Map<String, Field> fieldsMap = new HashMap<>();
        for (Field field : fields) {
            fieldsMap.put(field.getName(), field);
        }
        return fieldsMap;
    }

    public List<String> toList(Field[] fields){
        List<String> fieldsList = new ArrayList<>();
        for (Field field : fields) {
            fieldsList.add(field.getName());
        }
        return fieldsList;
    }
}
