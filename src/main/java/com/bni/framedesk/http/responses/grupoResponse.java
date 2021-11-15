package com.bni.framedesk.http.responses;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

import com.bni.framedesk.models.Quadro;

import lombok.Data;

@Data
public class GrupoResponse {

    private UUID id;

    private String nome;

	private List<Quadro> quadros;

    private OffsetDateTime criado;

    private OffsetDateTime atualizado;
}
