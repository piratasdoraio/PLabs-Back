package com.bni.framedesk.services.grupo;

import java.util.List;
import java.util.UUID;

import com.bni.framedesk.models.Card;
import com.bni.framedesk.models.Grupo;
import com.bni.framedesk.repositories.GrupoRepository;
import com.bni.framedesk.services.grupo.interfaces.IGrupoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GrupoService implements IGrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    @Override
    public List<Grupo> listar() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Grupo buscar(UUID id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Grupo salvar(Grupo grupo) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Grupo atualizar(Grupo grupo) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void deletar(UUID id) {
        // TODO Auto-generated method stub
        
    }

    

}