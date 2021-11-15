package com.bni.framedesk.repositories;

import java.util.UUID;

import com.bni.framedesk.models.Grupo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GrupoRepository extends JpaRepository<Grupo, UUID>  {
    
}
