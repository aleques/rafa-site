# SKILL — Meta Ads · Atelier Rafaela Ferreira

## Identidades e IDs fixos

| Campo | Valor |
|---|---|
| Ad Account ID | `529031678629914` |
| Page ID | `104881630912442` |
| Business ID | `182657076252353` |
| WhatsApp | `+32 466 45 92 25` |
| Morada | Rue des Trois Arbres 62, 1180 Uccle, Belgique |
| Coordenadas | lat `50.7983`, lon `4.3572` |
| GTM | `GTM-NPN8P5GC` |
| Pixel ID | `1043413356547228` |

## Targeting padrão

- **Género:** Mulheres apenas (genders: [2])
- **Idade:** 20–55
- **Localização:** Custom location — Uccle, raio 35km
- **Advantage+:** SEMPRE desactivado (`targeting_automation: {advantage_audience: 0}`)
- **Localização NUNCA por chave numérica** — sempre por coordenadas GPS

## Restrição EU crítica

`optimization_goal: CONVERSATIONS` está **bloqueado** para WhatsApp na Bélgica/EU.
Alternativa válida: `optimization_goal: LINK_CLICKS` com `destination_type: WHATSAPP`.

## Campanhas activas (Junho 2026)

| Campanha | Tipo | Público | Destino | Budget | ID Campanha | ID Conjunto |
|---|---|---|---|---|---|---|
| `[Rafaela][2025-05][Msg][WA] Laser` | Eng | Aberto F 20-55 | WhatsApp | €25/dia | `120252212032660093` | `120252212043950093` |
| `[Rafaela][2026-06][Leads][LP] Laser` | Leads | Aberto F 20-55 | LP v1 | €25/dia | `120253033485710093` | `120253033487030093` |
| `[Rafaela][2026-06][Traf][WA] Laser - LAL` | Traf | LAL cílios 1% + laser 2% | WhatsApp | €25/dia | `120253034098830093` | `120253034101610093` |

**Total activo: €75/dia**

## Anúncios activos e códigos de rastreamento

| Anúncio | ID Anúncio | Código | Campanha | ID Campanha | Criativo |
|---|---|---|---|---|---|
| AD02 - Experiência Cliente | `120252212053970093` | `LAS-A1` | `[Rafaela][2025-05][Msg][WA] Laser` | `120252212032660093` | creative_id `26401975692742652` |
| AD04 - Engajamento | `120252212063670093` | `LAS-A2` | `[Rafaela][2025-05][Msg][WA] Laser` | `120252212032660093` | creative_id `1433095075014988` |
| Video1 | `120252218149710093` | `LAS-A3` | `[Rafaela][2025-05][Msg][WA] Laser` | `120252212032660093` | video `1033759092558705` · thumb `3831d96c2670ef457769378d210b6358` |
| Video2 | `120252219199600093` | `LAS-A4` | `[Rafaela][2025-05][Msg][WA] Laser` | `120252212032660093` | video `1519450556428280` · thumb `48643f03fe354e5227c46f8d6566fadb` |
| Video3 — Rafaela fala | pendente | `LAS-A5` | `[Rafaela][2025-05][Msg][WA] Laser` | `120252212032660093` | video `1334417255246564` · thumb `7041853c40dabc31ba8ad74410047942` — criar manualmente |
| AD02 - LP v1 | `120253033735060093` | `LAS-B1` | `[Rafaela][2026-06][Leads][LP] Laser` | `120253033485710093` | video `1009323181106376` · thumb `765ddc126f188a7e5c8fa2161404231e` |
| AD02 - LAL WA | `120253034102860093` | `LAS-C1` | `[Rafaela][2026-06][Traf][WA] Laser - LAL` | `120253034098830093` | video `1009323181106376` · thumb `765ddc126f188a7e5c8fa2161404231e` |

## Criativos — vídeos e thumbnails

| Video ID | Thumbnail Hash | Descrição |
|---|---|---|
| `1009323181106376` | `765ddc126f188a7e5c8fa2161404231e` | AD02 — campeão, CTR >5% |
| `1433095075014988` | — | AD04 — creative_id directo |
| `1033759092558705` | `3831d96c2670ef457769378d210b6358` | Video1 — equipamento laser |
| `1519450556428280` | `48643f03fe354e5227c46f8d6566fadb` | Video2 |
| `1334417255246564` | `7041853c40dabc31ba8ad74410047942` | Video3 — Rafaela a falar (pendente — erro API) |

## Mensagem de saudação padrão (WhatsApp)

```
Bonjour ! Je veux en savoir plus sur l'épilation laser. Code promo : LAS-XX
```
(75/80 caracteres — substituir XX pelo código do anúncio)

## Sistema de rastreamento — cupão

- Código curto fixo (LAS-A1, LAS-B1, LAS-C1...) incorporado na mensagem de saudação WhatsApp
- Para campanhas LP: parâmetro `?ref=LAS-XX` na URL → JS da LP injeta código no link `wa.me`
- Atendente anota o código no campo "Observações" do agendamento no Fresha
- Reconciliação manual semanal: agendamentos concluídos + código → custo por conversão por anúncio
- **Futuro:** API Fresha + Meta Conversions API para fechar o loop (eventos: Contact → Schedule → Purchase)

## Conversões personalizadas por serviço (pendente)

Quando o job do Fresha estiver a enviar eventos via Conversions API, criar conversões personalizadas no Meta:

1. Gerenciador → Conversões personalizadas → Nova conversão
2. Regra: evento `Purchase` onde `content_category = "laser"` → nomear "Purchase — Laser"
3. Usar este evento como optimização nas campanhas de laser

O job do Fresha deve enviar sempre `content_category` e `content_name` no payload:
```json
{
  "event_name": "Purchase",
  "custom_data": {
    "content_name": "Depilação Laser",
    "content_category": "laser",
    "value": 120.00,
    "currency": "EUR"
  }
}
```

Fazer o mesmo para cílios e unhas quando relevante.

## Pixel — eventos configurados

| Evento | Como dispara | Estado |
|---|---|---|
| `PageView` | GTM — automático | Activo |
| `Contact` | GTM — clique em link wa.me na LP | Activo |
| `Schedule` | Meta Conversions API — agendamento Fresha | Pendente |
| `Purchase` | Meta Conversions API — pagamento confirmado | Pendente |

## Nomenclatura de campanhas

```
[Rafaela][YYYY-MM][Tipo][Canal] Serviço
```

Tipos: `Msg`, `Traf`, `Eng`, `Leads`
Canais: `WA` (WhatsApp), `LP` (Landing Page)

## Landing pages

| URL | Parâmetro | Estado |
|---|---|---|
| `https://www.atelierrafaelaferreira.be/lps/laser-hair-removal/` | `?ref=LAS-XX` | Activa — JS configurado |
| `https://www.atelierrafaelaferreira.be/lps/laser-hair-removal-v2/` | `?ref=LAS-XX` | Activa — a verificar |

## Públicos disponíveis (relevantes para laser)

| ID | Nome | Tipo | Tamanho | Status |
|---|---|---|---|---|
| `120217830808730093` | LAL cílios 1% (BE) — 2025-02 | LOOKALIKE | 63K–74K | ACTIVE |
| `120217830718940093` | LAL laser 1% (BE) — 2025-02 | LOOKALIKE | pequeno | INACTIVE |
| `120244271339590093` | LAL Insta engajamento 2% (BE) — 2026-02 | LOOKALIKE | 1K | INACTIVE |
| `120244270873440093` | Insta — Interagiram 90D | PLATFORM | 14K–16K | ACTIVE |
| `120217684941880093` | fresha-clientes-2025-02-23-laser.csv | CUSTOM | — | ACTIVE |

## Histórico de campanhas Hertz (melhor performance)

Campanha `[Hertz] [Leads] Laser – Tintim — WPP 2`:
- Conjunto "Advantage": €3.880 gastos → **340 conversões** → **€11,41 por resultado**
- Objetivo: OUTCOME_LEADS com OFFSITE_CONVERSIONS (Pixel na LP)
- Público: LAL + Advantage+
- Destino: Landing page com Pixel a disparar evento Lead
- **Meses:** Novembro/Dezembro — época forte para laser

## Sazonalidade

- **Melhores meses:** Novembro e Dezembro
- **Piores meses:** Junho–Agosto (verão, exposição solar, contraindicado para laser)
- **Setembro:** preparar campanhas — criativos novos, públicos LAL actualizados, Pixel com dados acumulados

## Serviços do atelier

- Depilação a laser ← **prioridade de crescimento**
- Colocação de unhas de gel, BAB, manicure, pedicure
- Colocação de cílios

## Regras críticas

1. **Nunca usar chave numérica de cidade** — sempre coordenadas GPS
2. **Não aceitar sugestão do Meta** de expandir idade/género — homens com más intenções, idosos clicam por engano
3. **Não aceitar Advantage+ Audience** — desactivar sempre
4. **Não dividir budget abaixo de €15/campanha** — nunca sai da fase de aprendizado
5. **Meta precisa ~50 conversas** para sair da fase de aprendizado
6. **Nunca mudar evento de conversão** de um conjunto publicado — o Meta bloqueia e obriga a criar novo conjunto
7. **Anúncios WhatsApp exigem título** — campo `title` obrigatório no `video_data`

## Stack técnico

| Camada | Ferramenta |
|---|---|
| Ads | Meta Ads (Facebook/Instagram) |
| Agendamento | Fresha / Treatwell |
| WhatsApp | Evolution API (QR Code) — NÃO migrar para Cloud API |
| CRM | HubSpot Free |
| Omnichannel | Chatwoot (self-hosted) |
| Orquestração | n8n (Oracle Cloud Free Tier) |
| Infra | Oracle Cloud Free Tier VPS |