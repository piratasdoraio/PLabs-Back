package com.bni.framedesk.services;

import java.util.UUID;

public interface IService<T> {
    
    public T index();
    public T show(UUID id);
    public T store(T Request);
    public T update(T Request);
    public T delete(UUID id);
}
