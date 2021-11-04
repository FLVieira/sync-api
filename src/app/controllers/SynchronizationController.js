/* eslint-disable no-unused-vars */
import Visit from '../models/Visit';

/**
 * NOTAS FELIPE

  Felipe, a solução de sincronização do WatermelonDB leva em conta que o nosso backend está de acordo com o protocolo de
  sincronização da lib deles. Ou seja, pra ir direto ao ponto, vou explicar o que eu entendi que seria a nossa melhor abordagem quanto à isso
  (claro que teremos que discutir posteriormente tudo isso):

  1. Manter o enpoint: "vt/list-vt-byStatus" para somente de fato consultar as visitas por status.
  2. Criar outro endpoint: "vt/sync/pull" para que o técnico no app Diel consiga buscar pelas visitas do dia. Essa rota deve somente trazer
  as visitas do dia corrente que tenham status: Agendado, AguardandoAprovacao ou Finalizado. Visitas com outros status também podem ser retornadas
  aqui contanto que sejam fruto de modificações do dia corrente (e.g. quando o técnico inicia a visita e logo após decide sincronizar -> status: Em Andamento)
  3. Criar outro endpoint: "vt/sync/push" para que o técnico no app Diel consiga enviar as alterações feitas nos dados das visitas técnicas.

  Nessa API em node, trouxe um exemplo básico seguindo o protocolo de sincronização do WatermelonDB para que tudo que foi dito faça um pouco
  mais de sentido, no mais, pra entender em detalhes dá uma olhada aqui: https://nozbe.github.io/WatermelonDB/Advanced/Sync.html
**
*/

class SynchronizationController {
  async pullChanges(req, res) {
    // This endpoint must accept the following parameters.
    const {
      lastPulledAt, // is a timestamp for the last time the client pulled changes from server (or null if first sync)
      schemaVersion, // is the current schema version of the local database
      migration, // is an object representing schema changes since last sync (or null if up to date or not supported)
    } = req.body;

    let visits = await Visit.findAll({ raw: true });
    visits = visits.map((visit) => {
      const newVisitObj = {};
      Object.keys(visit).forEach((key) => {
        newVisitObj[key.toUpperCase()] = visit[key];
      });
      return newVisitObj;
    });

    // This endpoint must return the exact same object:
    const response = {
      changes: { visits }, // valid changes object | The current and most updated array of visits of the technician
      timestamp: new Date(), // integer with *server's* current time
    };

    return res.status(200).json(response);
  }

  async pushChanges(req, res) {
    // This endpoint must accept the following parameters.
    const {
      lastPulledAt, // the timestamp of the last successful pull (timestamp returned in pullChanges)
      changes, // valid changes object (READ THIS TO UNDERSTAND WHAT IS GOING TO BE INSIDE THIS ONJ -> https://nozbe.github.io/WatermelonDB/Advanced/Sync.html#implementing-your-sync-backend)
    } = req.body;

    // The backend must only return the correct httpStatus, because watermelondb will use it to determine if the synchronization went well or if another synchronization must be done.
    return res.status(201).json();
  }
}

export default new SynchronizationController();
