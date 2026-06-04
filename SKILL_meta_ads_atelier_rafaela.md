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

## Targeting padrão

- **Género:** Mulheres apenas (genders: [2])
- **Idade:** 20–55
- **Localização:** Custom location — Uccle, raio 35km
- **Advantage+:** SEMPRE desactivado (`targeting_automation: {advantage_audience: 0}`)
- **Localização NUNCA por chave numérica** — sempre por coordenadas GPS

## Restrição EU crítica

`optimization_goal: CONVERSATIONS` está **bloqueado** para WhatsApp na Bélgica/EU.
Alternativa válida: `optimization_goal: LINK_CLICKS` com `destination_type: WHATSAPP`.

## Campanha activa

| Campo | Valor |
|---|---|
| Nome | `[Rafaela][2025-05][Msg][WA] Laser` |
| ID Campanha | `120252212032660093` |
| ID Conjunto | `120252212043950093` |
| Objetivo | OUTCOME_ENGAGEMENT |
| Orçamento | €25/dia |
| Status | ACTIVE |

## Anúncios activos e códigos de rastreamento

| Anúncio | ID | Código | Criativo |
|---|---|---|---|
| AD02 - Experiência Cliente | `120252212053970093` | `LAS-A1` | creative_id `26401975692742652` |
| AD04 - Engajamento | `120252212063670093` | `LAS-A2` | creative_id `1433095075014988` |
| Video1 | `120252218149710093` | `LAS-A3` | video `1033759092558705` |
| Video2 | `120252219199600093` | `LAS-A4` | video `1519450556428280` |

## Mensagem de saudação padrão (WhatsApp)

```
Bonjour ! Je veux en savoir plus sur l'épilation laser. Code promo : LAS-XX
```
(75/80 caracteres — substituir XX pelo código do anúncio)

## Sistema de rastreamento — cupão

- Código curto fixo (LAS-A1, LAS-A2...) incorporado na mensagem de saudação WhatsApp
- Atendente anota o código no campo "Observações" do agendamento no Fresha
- Reconciliação manual semanal: agendamentos concluídos + código → custo por conversão por anúncio
- **Futuro:** API Fresha + Meta Conversions API para fechar o loop automaticamente

## Nomenclatura de campanhas

```
[Rafaela][YYYY-MM][Tipo][Canal] Serviço
```

Tipos: `Msg`, `Traf`, `Eng`, `Leads`
Canais: `WA` (WhatsApp), `LP` (Landing Page)

## Landing pages (Hertz)

| URL | Estado |
|---|---|
| `https://www.atelierrafaelaferreira.be/lps/laser-hair-removal/` | Activa — links wa.me sem código |
| `https://www.atelierrafaelaferreira.be/lps/laser-hair-removal-v2/` | Activa — a verificar |

**Pendente:** modificar o JS das LPs para ler parâmetro `?ref=LAS-XX` da URL e injectá-lo no link `wa.me` automaticamente.

## Histórico de campanhas Hertz (melhor performance)

Campanha `[Hertz] [Leads] Laser – Tintim — WPP 2`:
- Conjunto "Advantage": €3.880 gastos → **340 conversões** → **€11,41 por resultado**
- Objetivo: OUTCOME_LEADS com OFFSITE_CONVERSIONS (Pixel na LP)
- Público: LAL + Advantage+
- Destino: Landing page com Pixel a disparar evento Lead

## Sazonalidade

- **Melhores meses:** Novembro e Dezembro (inverno, pele apta, mentalidade de compra)
- **Piores meses:** Junho–Agosto (verão, exposição solar, contraindicado para laser)
- **Setembro:** início da temporada boa — preparar campanhas em Agosto

## Serviços do atelier

- Depilação a laser ← **prioridade de crescimento**
- Colocação de unhas de gel, BAB, manicure, pedicure
- Colocação de cílios

## Regras críticas

1. **Nunca usar chave numérica de cidade** — sempre coordenadas GPS
2. **Não aceitar sugestão do Meta** de expandir idade/género — os filtros existem por razão concreta (homens com más intenções, idosos clicam por engano)
3. **Não aceitar Advantage+ Audience** — desactivar sempre
4. **Não dividir budget abaixo de €15/campanha** — abaixo disso nunca sai da fase de aprendizado
5. **Meta precisa ~50 conversas** para sair da fase de aprendizado

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

Teste