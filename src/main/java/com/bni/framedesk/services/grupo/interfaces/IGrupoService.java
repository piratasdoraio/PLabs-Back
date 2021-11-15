package com.bni.framedesk.services.grupo.interfaces;

import java.util.List;
import java.util.UUID;

import com.bni.framedesk.http.requests.grupo.AtualizarGrupoRequest;
import com.bni.framedesk.http.requests.grupo.SalvarGrupoRequest;
import com.bni.framedesk.http.responses.GrupoResponse;

public interface IGrupoService {
    public List<GrupoResponse> listar();
    public GrupoResponse buscar(UUID id);
    public GrupoResponse salvar(SalvarGrupoRequest grupo);
    public GrupoResponse atualizar(AtualizarGrupoRequest grupo, UUID id);
    public void deletar(UUID id);
}
