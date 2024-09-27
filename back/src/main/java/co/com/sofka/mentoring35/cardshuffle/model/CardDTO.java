package co.com.sofka.mentoring35.cardshuffle.model;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class CardDTO {

    private String id;
    private Date date;
    private String card;

    public CardDTO() {
    }

    public String getId() {
        return id;
    }

    public CardDTO(String id, Date date, String card) {
        this.id = id;
        this.date = date;
        this.card = card;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }
}
