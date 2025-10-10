package com.example.PecaFacil.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.PecaFacil.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> { }
