package com.bni.framedesk.http.controllers;

import com.bni.framedesk.models.Card;
import com.bni.framedesk.services.card.CardService;
import com.bni.framedesk.services.card.interfaces.ICardService;

public class CardController {
    
    public ICardService<Card> service = new CardService();

    
}
