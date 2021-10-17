function login(){
    player_1_name = document.getElementById("player_1_login").value;
    player_2_name = document.getElementById("player_2_login").value;

    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);

    window.location.replace("quizz_game_page.html");
}