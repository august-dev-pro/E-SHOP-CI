export function limiterNomArticle(nomArticle, longueurLimite) {
  if (nomArticle.length > longueurLimite) {
    return nomArticle.substring(0, longueurLimite) + "...";
  }
  return nomArticle;
}
