package com.bni.framedesk.services.card.interfaces;

import java.util.UUID;

import com.bni.framedesk.services.IService;

public interface ICardService<T> extends IService<T> {
    
    public T exemploAlgoExtra(UUID id);
}
