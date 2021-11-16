package com.bni.framedesk.http.requests.grupo;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class SalvarGrupoRequest {

    @Size(max = 30) @NotNull
    private String nome;
	
}
