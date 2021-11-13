package com.bni.framedesk.models;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.annotations.Where;

import lombok.Data;

@Entity
@Table(name = "colunas")
@Data
@SQLDelete(sql = "update colunas set deletado = TRUE where id =?")
@Where(clause = "deletado = FALSE")
public class Coluna {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

    @Column(nullable = false)
    private String nome;

    @ManyToOne
    @JoinColumn(name="quadro_id", nullable=false, updatable=true)
    private Quadro quadro;

    @OneToMany(mappedBy = "coluna")
	private List<Card> cards;

    @Column(nullable = false)
    @CreationTimestamp
    private OffsetDateTime criado;
    
    @Column(nullable = false)
    @UpdateTimestamp
    private OffsetDateTime atualizado;
    
    @Column(nullable = false)
    private Boolean deletado = Boolean.FALSE;
}