<template>
    <div>
        <form name="contact" onreset="window.alert('Message envoyé');">
            <br>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Votre adresse e-mail :</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="votre adresse e-mail" required>
            </div>
            <label for="exampleFormControlInput1" class="form-label">Votre sujet :</label>
            <select class="form-select" aria-label="Default select example" required>
                <option disabled selected>Sujet du message</option>
                <option value="1">Erreur avec le site</option>
                <option value="2">Question quelconque</option>
                <option value="4">Autre</option>
            </select>
            <br>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Votre message :</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="votre message" required></textarea>
            </div>
            <br>
            <div class="btn-wrapper">
                <button class="btn" type="reset">Envoyer</button>
            </div>
        </form>
    </div>
</template>

<script>
</script>

<style scoped>
.btn {
    background-color: #a0032a;
    color:white;
}
.btn-wrapper {
    text-align: center;
}
</style>