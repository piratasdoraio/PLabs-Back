package com.bni.framedesk.models.mappers;

import java.util.ArrayList;
import java.util.List;

import com.bni.framedesk.http.requests.grupo.AtualizarGrupoRequest;
import com.bni.framedesk.http.requests.grupo.SalvarGrupoRequest;
import com.bni.framedesk.http.responses.GrupoResponse;
import com.bni.framedesk.models.Grupo;
import com.bni.framedesk.models.mappers.interfaces.IMapper;

public class GrupoMapper implements IMapper<SalvarGrupoRequest, AtualizarGrupoRequest, GrupoResponse, Grupo>  {

    @Override
    public Grupo toModelSave(SalvarGrupoRequest request) {
        Grupo grupo = new Grupo();
        grupo.setNome(request.getNome());
        return grupo;
    }

    @Override
    public Grupo toModelUpdate(AtualizarGrupoRequest request) {
        Grupo grupo = new Grupo();
        grupo.setNome(request.getNome());
        return grupo;
    }

    @Override
    public GrupoResponse toResponse(Grupo model) {
        GrupoResponse grupo = new GrupoResponse();
        grupo.setId(model.getId());
        grupo.setNome(model.getNome());
        grupo.setCriado(model.getCriado());
        grupo.setAtualizado(model.getAtualizado());
        return grupo;
    }

    @Override
    public List<GrupoResponse> toResponse(List<Grupo> modelList) {
        List<GrupoResponse> grupoResponsesList = new ArrayList<>();
        for (Grupo grupoModel : modelList) {
            grupoResponsesList.add(toResponse(grupoModel));
        }
        return grupoResponsesList;
    }
}
