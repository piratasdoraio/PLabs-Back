package com.bni.framedesk.models.mappers.interfaces;

import java.io.IOException;
import java.util.List;
public interface IMapper<SAVE_REQUEST, UPDATE_REQUEST, RESPONSE, MODEL> {
    
    public MODEL toModelSave(SAVE_REQUEST request);
    public MODEL toModelUpdate(UPDATE_REQUEST request);
    
    public RESPONSE toResponse(MODEL model) throws IOException;

    public List<RESPONSE> toResponse(List<MODEL> modelList);
    
}
