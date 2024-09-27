package co.com.sofka.mentoring35.cardshuffle.repository;


import co.com.sofka.mentoring35.cardshuffle.collection.Card;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface CardRepository extends ReactiveCrudRepository<Card, String> {
}
