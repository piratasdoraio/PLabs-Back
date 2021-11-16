package com.bni.framedesk.http.validators.exemploValidator;

import java.math.BigDecimal;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ExemploValidator implements ConstraintValidator<ExemploValid, String> {
    
    private String value;
 
    @Override
    public void initialize(ExemploValid constraintAnnotation) {
        this.value = constraintAnnotation.value();
    }
 
    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        if(value.isEmpty()) {
            return true;
        }
 
        try {
            new BigDecimal(value);
            return true;
        } catch (NumberFormatException nfex) {
            return false;
        }
    }
}
