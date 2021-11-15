package com.bni.framedesk.services.grupo.interfaces;

import java.util.List;
import java.util.UUID;

import com.bni.framedesk.models.Grupo;

public interface IGrupoService {
    public List<Grupo> listar();
    public Grupo buscar(UUID id);
    public Grupo salvar(Grupo grupo);
    public Grupo atualizar(Grupo grupo);
    public void deletar(UUID id);
}
