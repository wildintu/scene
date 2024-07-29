# scene
Event app that allows clubs and organizations to create and share events while allowing members and guests to find and join events.

## Domain Diagram
```mermaid
    erDiagram
        CLUB }|..|{ EVENT : creates-host
        VENUE ||--o{ EVENT : hosts-relation
        EVENT ||--o{ ATTENDEE-USER : user-relation
```

# ERD
```mermaid
    erDiagram
        CLUB ||--o{ EVENT : creates
        CLUB {
            int id
            int club_id
            string email
            string encrypted_password
            string name
            string phone
            string address
            string city
            string state
            int    zip
            string website
        }
        VENUE ||--o{ EVENT : hosts
        VENUE {
            int id
            int venue_id
            string name
            string phone
            string email
            string address
            string city
            string state
            int    zip
            string website
            string description
        }
        EVENT ||--o{ ATTENDEE : includes
        EVENT {
            int id
            int club_id
            int venue_id
            string title
            string event_date
            string description
            string cost
            datetime created_at
            datetime completed_at
        }
        ATTENDEE {
            int id
            int event_id
            string email
            string encrypted_password
            string first_name
            string last_name
            string date_of_birth
            string phone
            string address
            string city
            string state
            int    zip
            string club
            datetime created_at
        }
```