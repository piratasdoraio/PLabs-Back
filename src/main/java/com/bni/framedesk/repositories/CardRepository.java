package com.bni.framedesk.repositories;

import java.util.UUID;
import com.bni.framedesk.models.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, UUID>  {
    
}
