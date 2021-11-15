package com.bni.framedesk.services.grupo;

import java.util.List;
import java.util.UUID;

import com.bni.framedesk.http.requests.grupo.AtualizarGrupoRequest;
import com.bni.framedesk.http.requests.grupo.SalvarGrupoRequest;
import com.bni.framedesk.http.responses.GrupoResponse;
import com.bni.framedesk.repositories.GrupoRepository;
import com.bni.framedesk.services.grupo.interfaces.IGrupoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GrupoService implements IGrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    @Override
    public List<GrupoResponse> listar() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public GrupoResponse buscar(UUID id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public GrupoResponse salvar(SalvarGrupoRequest grupo) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public GrupoResponse atualizar(AtualizarGrupoRequest grupo, UUID id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deletar(UUID id) {
        // TODO Auto-generated method stub
        
    }



    

}