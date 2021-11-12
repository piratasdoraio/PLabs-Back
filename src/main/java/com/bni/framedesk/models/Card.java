package com.bni.framedesk.models;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import lombok.Data;

@Entity
@Table(name = "cards")
@Data
@SQLDelete(sql = "update cards set deletado = TRUE where id =?")
@Where(clause = "deletado = FALSE")
public class Card {

}
