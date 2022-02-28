INSERT INTO user (username, email, password)
VALUES
    ('craz', 'qraz@email.com', 'craz'),
    ('braz', 'braz@email.com', 'craz'),
    ('draz', 'draz@email.com', 'craz'),
    ('praz', 'praz@email.com', 'craz'),
    ('mraz', 'mraz@email.com', 'craz');

INSERT INTO post (post_title, post_description, user_id)
VALUES
    ('title', 'description', 1),
    ('newtitle', 'description', 1),
    ('title', 'description', 2),
    ('title', 'description', 3),
    ('title', 'description', 4);

INSERT INTO purchase (purchase_amount, post_id, user_id)
VALUES 
    (100, 1, 1),
    (120, 2, 1),
    (300, 3, 2),
    (400, 5, 4);